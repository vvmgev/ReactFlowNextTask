'use client';
import React, { useRef, useEffect } from 'react'
import { Heatmap, HeatmapOptions } from '@antv/g2plot';
import { config } from './config';

const HeatMapChart: React.FC = (): React.ReactElement => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/polar-heatmap.json')
        .then((res) => res.json())
        .then((data) => {
          const heatmapPlot = new Heatmap(containerRef.current as HTMLDivElement, {data, ...config} as HeatmapOptions);
          heatmapPlot.render();
        });
    }, [])

    return (
        <div ref={containerRef} id="container"></div>
    )
}

export default HeatMapChart;



