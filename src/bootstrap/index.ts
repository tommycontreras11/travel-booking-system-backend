import { Server } from 'http'
import { Server as ServerSSL } from 'https'
import databases from './databases'
import Cookie from './../libs/cookie'

export default async (_server: Server | ServerSSL, callback: VoidFunction) => {
	await databases()
	// await upload()
	Cookie.instance.setConfiguration()
	callback()
}