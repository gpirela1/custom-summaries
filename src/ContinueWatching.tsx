import React from 'react'

export interface ContinueWatchingItem {
  id: string
  title: string
  subtitle: string
  thumbnailUrl: string
  progress: number // 0-100
  timeRemaining: {
    value: number
    unit: 'sec' | 'mins'
  }
  lastViewed: string
  href: string
}

interface ContinueWatchingProps {
  items: ContinueWatchingItem[]
  'data-id'?: string
}

export const ContinueWatching: React.FC<ContinueWatchingProps> = ({
  items,
  'data-id': dataId,
}) => {
  return (
    <div
      data-id={dataId}
      className="flex flex-col bg-white h-[386px] w-[271.5px] border border-[#D9DDE4] rounded-[10px] p-3 overflow-auto"
    >
      <h3 className="text-lg leading-6 font-normal mb-3">Continue Watching</h3>
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="block text-[#010D39] hover:no-underline"
          >
            <div className="h-[92px] bg-white flex gap-3 border border-[#D9DDE4] rounded-[10px] p-2">
              <div className="flex flex-col gap-1">
                <img
                  src={item.thumbnailUrl}
                  alt=""
                  className="w-[76px] h-[84px] flex-1 bg-[#EDF3FF] rounded-[6px] object-cover"
                />
                <div className="bg-[#E5E7EC] w-[76px] h-1 rounded-lg">
                  <div
                    className="h-1 bg-[#0961FB] rounded-lg"
                    style={{
                      width: `${item.progress}%`,
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between flex-1">
                <div className="flex flex-col items-start">
                  <div className="text-xs leading-[18px] font-medium text-[#010D39]">
                    {item.title}
                  </div>
                  <div className="text-xs leading-[18px] font-medium text-[#546B8F]">
                    {item.subtitle}
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <div className="bg-[#E6EFFF] text-[11px] leading-[18px] text-[#546B8F] rounded-[6px] px-1">
                    <span>{item.timeRemaining.value}</span>
                    <span> {item.timeRemaining.unit}</span> left
                  </div>
                  <div
                    className="text-xs leading-[18px] text-[#546B8F]"
                    title="Date last viewed"
                  >
                    {item.lastViewed}
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
