import { FC, useState, useEffect, useRef } from 'react';

import styles from './index.module.css';

const urls = (new Array(240).fill(0, 0).map( (item, idx) => `pop00000${idx>98? '': (idx>8? '0': '00')}${idx +1}.png`));

const loadImg = (src: string) => {
    return fetch(`/pics/${src}`).then((res) => res.blob()).then( blob => {
        const img = new Image();
        img.src =  URL.createObjectURL(blob);
        return img;
    });
};

const mapImages = (urls: string[]) => {
    // const [complete, setComplete] = useState(true);
    //
    const imgMaps = new Map();
    let count = 0;
    //
    for(let url of urls){
        imgMaps.set(url, null);
        loadImg(url).then(img => img, () => {
            return loadImg(url);
        }).then(img => {
            imgMaps.set(url, img);
            count ++;
            // if(count>10 && !complete){
            //   setComplete(true);
            // }
        });
    }
    return imgMaps;
};

const imgMaps = mapImages(urls);

const drawImg = (imgMaps: Map<any, any>, index = 0, ctx: any) => {
    const imgArr = Array.from(imgMaps.keys());
    const key = imgArr[index];
    const img = imgMaps.get(key);
    if(img){
        ctx.clearRect(0, 0, 474, 474);
        ctx.drawImage(imgMaps.get(key), 0, 0, 474, 474);
    }
};


const VideoCom: FC<any> = () => {
// const  {imgMaps, complete} = useImages(urls);

    const cvsRef = useRef<any>();
    const ttRef = useRef<any>();

    useEffect(() => {
        if(cvsRef.current){
            const ctx=cvsRef.current.getContext("2d");
            let index = 0;
            drawImg(imgMaps, index, ctx);
            ttRef.current = setInterval(() => {
                index >= imgMaps.size && (index = 0);
                drawImg(imgMaps, index ++, ctx);
            }, 30);
        }
        //
        return () => {
            clearInterval(ttRef.current);
        };
    }, []);

    // useEffect(() => {
    //     document.oncontextmenu = function(){
    //         return false;
    //     };
    // }, []);

    return (
        <div className={styles.box}>
            <div id='cvs' className={styles.cvs} >
                <canvas ref={cvsRef} width='474' height='474' />
            </div>
        </div>
    );
};

export default VideoCom;