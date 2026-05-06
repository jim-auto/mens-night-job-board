export type JobType = 'ボーイ' | '黒服' | 'ホスト' | 'ドライバー' | 'スカウト' | 'その他'
export type Area = '東京' | '大阪' | '名古屋' | '福岡' | '札幌' | 'その他'

export interface Job {
  id: string
  name: string
  area: Area
  jobType: JobType
  salary: string
  hours: string
  tags: string[]
  description: string
  applyUrl: string
  rumors: string[]
  featured?: boolean
}
