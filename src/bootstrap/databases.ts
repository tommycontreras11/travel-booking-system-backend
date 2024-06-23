import { createDataSourceConnections } from "./../database/connections"

export default async () => {
    await createDataSourceConnections()

    //* Another connection
}