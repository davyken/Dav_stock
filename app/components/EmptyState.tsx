import { icons } from 'lucide-react'
import React, { FC } from 'react'

interface EmptyStateProps {
    IconComponent: keyof typeof icons,
    message: string
}

const EmptyState: FC<EmptyStateProps> = ({ IconComponent, message }) => {
    const SelectedIcon = icons[IconComponent]
    return (
        <div className='w-full h-full my-20 flex justify-center items-center flex-col'>
            <div className='wiggle-animation'>
                <SelectedIcon strokeWidth={1} className='w-30 h-30 text-primary' />
            </div>
            <p className='text-sm'>{message}</p>
        </div>
    )
}

export default EmptyState
