import React,{Component} from 'react';

const  List = ({list})=>{

    return(
    <ul className = 'list'>
    {list.map(e=>{
        return(
        <li className='item'>
            <img src ={e.url}/>
            <p>{e.title}</p>
        </li>
        )
    })
    }
</ul>
)
}

export default List;