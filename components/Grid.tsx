import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { title } from 'process';
import { gridItems } from '@/data';

const Grid = () => {
    const items = [{ id: 1, title: 'Title1', description: 'card desc' }];
    return (
        <BentoGrid>
            {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
                <BentoGridItem
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    className={className}
                    img={img}
                    imgClassName={imgClassName}
                    titleClassName={titleClassName}
                    spareImg={spareImg}
                />
            ))}
        </BentoGrid>
    )
}

export default Grid