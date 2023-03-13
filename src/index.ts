export interface PromptWatchConfig {
  startDate: Date
  endDate: Date
  prompt: string
  tags?: string[]
}

export function watch(config: PromptWatchConfig) {
  console.log("watch:", config)

  throw new Error("Not implemented")
}
