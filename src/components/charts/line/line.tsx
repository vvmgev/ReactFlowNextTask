'use client';
import React, { useRef, useEffect } from 'react'
import { Line, LineOptions } from '@antv/g2plot';
import { config } from './config';


const LineChart: React.FC = (): React.ReactElement => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
        .then((res) => res.json())
        .then((data) => {
          const line = new Line(containerRef.current as HTMLDivElement, {data, ...config} as LineOptions);
          line.render();
        });
    }, [])

    return (
        <div ref={containerRef} id='container'></div> 
    )
}

export default LineChart;