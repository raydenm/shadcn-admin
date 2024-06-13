import { useQuery } from '@tanstack/react-query'
import { AppConfig } from './types'


const defaultAppConfig: AppConfig = {
  config: {
    browserUrl: `http://192.168.1.226:5000`,
  },
}

export const useAppConfig = () => {
  const { data } = useQuery<AppConfig>({
    queryKey: ['appConfig'],
    queryFn: async () => {
      try {
        const response = await fetch(`/config/config.json`)
        const data = (await response.json()) as AppConfig
        return data
      } catch (error) {
        return defaultAppConfig
      }
    },
  })

  if (!data) {
    return {
      config: defaultAppConfig.config,
    }
  }

  return {
    config: data.config,
  }
}
