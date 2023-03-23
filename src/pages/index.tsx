import React, { useState, useEffect } from 'react';
import { PAGInit } from 'libpag';
import styles from './index.less';

const IndexPage = () => {

    useEffect(() => {
        PAGInit({ locateFile: (file) => `${window.location.origin}/${file}`}).then((PAG) => {
            const url = '../assets/pag_1.pag';
            window.fetch(url).then((response) => response.arrayBuffer()).then(async (buffer) => {
                console.log(111, buffer, PAG);
                const pagFile = await PAG.PAGFile.load(buffer);
                console.log(2222, pagFile);

                const canvas: any = document.getElementById('canvas');
                canvas.width = pagFile.width();
                canvas.height = pagFile.height();
                const pagView: any = await PAG.PAGView.init(pagFile, canvas, { firstFrame: false, useScale: false }); // 取消首屏渲染，取消canvas縮放
                pagView.setRepeatCount(1);
                await pagView.play();
            });
        });
    }, []);

    return (
        <div>
            <canvas id="canvas"></canvas>
        </div>
    );
}

export default IndexPage;
