'use client';
import React, { useRef, useEffect } from 'react'
import { Column, ColumnOptions } from '@antv/g2plot';
import { config } from './config';


const ColumnChart: React.FC = (): React.ReactElement => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const columnPlot = new Column(containerRef.current as HTMLDivElement, config as ColumnOptions);
          columnPlot.render();
    }, [])

    return (
        <div ref={containerRef} id='container'></div> 
    )
}

export default ColumnChart;