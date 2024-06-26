import { DataSource } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { activityData } from "../data/activity";
import { ActivityEntity } from "./../../../database/entities/entity/activity.entity";

export class ActivitySeeder implements Seeder {
  async run(_factory: Factory, dataSource: DataSource): Promise<void> {
    try {
      const activityRepository = dataSource.getRepository(ActivityEntity);

      await Promise.all(
        activityData.map(async (activity) => {
          const exists = await activityRepository
            .findOne({
              where: { name: activity.name },
            })
            .catch((e) =>
              console.error(
                "Validation Error at activityRepository.findOne ActivitySeeder",
                e
              )
            );

          if (exists) return;

          await activityRepository
            .insert({
              name: activity.name,
              location: activity.location,
              price: activity.price,
              description: activity.description,
              availableSlot: activity.availableSlot
            })
            .catch((e) => console.error("Error saving new ActivitySeeder", e));
        })
      );
    } catch (error) {
      return console.error(
        `❌ ~ file: activity.seed.ts ~ ActivitySeeder ~ run ~ error: `,
        error
      );
    }
  }
}
