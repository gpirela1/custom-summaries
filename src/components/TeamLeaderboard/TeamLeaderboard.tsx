import React from 'react'

export type TeamMember = {
  id: string
  name: string
  rank: number
  callCount: number
  imageUrl?: string
  initials?: string
  backgroundColor?: string
}

interface TeamLeaderboardProps {
  title: string
  subtitle: string
  members: TeamMember[]
  onMemberClick?: (memberId: string) => void
  className?: string
  'data-id'?: string
}

export const TeamLeaderboard: React.FC<TeamLeaderboardProps> = ({
  title,
  subtitle,
  members,
  onMemberClick,
  className = '',
  'data-id': dataId,
}) => {
  return (
    <div
      className={`w-full bg-white text-black font-sans ${className}`}
      data-id={dataId}
    >
      <div className="p-4 pb-8">
        <div className="px-2 pb-2">
          <h3 className="text-[18px] leading-7 font-medium text-[rgba(18,31,51,0.87)] mb-2">
            {title}
          </h3>
          <p className="text-sm leading-5 text-[rgba(18,31,51,0.6)]">
            {subtitle}
          </p>
        </div>
        <div>
          {members.map((member) => (
            <div key={member.id} className="relative">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  onMemberClick?.(member.id)
                }}
                className="flex items-center p-6 pl-4 border-b border-[rgb(229,231,236)] hover:bg-gray-50 transition-colors"
              >
                <div className="text-right mr-3 min-w-[32px]">
                  <h3 className="text-[18px] leading-7 font-normal text-[rgb(82,95,118)]">
                    #{member.rank}
                  </h3>
                </div>
                <div
                  className="w-[42px] h-[42px] rounded-full flex items-center justify-center border border-white"
                  style={{
                    backgroundColor: member.backgroundColor || '#A34C5F',
                  }}
                >
                  {member.imageUrl ? (
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-[40px] h-[40px] rounded-full"
                    />
                  ) : (
                    <span className="text-white uppercase">
                      {member.initials}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0 px-4">
                  <p className="text-sm font-medium text-[rgb(18,21,26)] truncate m-0">
                    {member.name}
                  </p>
                  <p className="text-sm font-normal text-[rgb(82,95,118)] truncate m-0">
                    {member.callCount}{' '}
                    {member.callCount === 1 ? 'call' : 'calls'}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
