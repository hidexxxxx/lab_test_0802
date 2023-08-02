import React from 'react';
import style from "../styles/test.module.scss";

//標準でtailwindが組み込まれている設定になっている
const news = () => {
    return (
        <div className='text-5xl underline'>
            test
            <p className={style.test}>テスト</p>
        </div>
    );
};

export default news;