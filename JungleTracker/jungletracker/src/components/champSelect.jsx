import React from 'react'
import { useState } from 'react'
import { clearData } from '../data';

function ChampSelect() {
    const [side, setSide] = useState("notSelected");
    const [champion, setChampion] = useState("none");
    var champions = []

    function championList(){
        var lookup = {}
        var result = []

        clearData.forEach(element => {
                var championName = element.Champion
                if(!( championName in lookup)){
                    lookup[championName] = 1;
                    result.push(championName);
                }
            }
        )
        return result
    }

    champions = championList()

    const onOptionChangeHandler = (event) => {
        console.log("User Selected Value - ", event.target.value)
        setChampion(event.target.value)
    }

    return (
        <div>
            <div>
            <button className="Red start" onClick={() => setSide("red")} >Red</button>
            <button className="Blue start" onClick={() => setSide("blue")} >Blue</button>
            </div>
            <label for="championsDropdown">Choose a champion:</label>
            <select name='championsDropdown' id='championsDropdown' onChange={onOptionChangeHandler}>Champions
                <option>Please choose one option</option>
                {champions.map( champ => {
                    return <option key={`${champ}`}>{champ}</option>
                }
                )}
            </select>
        </div>
        
    )
}

export default ChampSelect