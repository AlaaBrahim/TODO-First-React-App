import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'

export function ThemeSwitcher(){
    const [theme, setTheme] = useState('auto');
    const [icon, setIcon] = useState(faCircleHalfStroke);
    const [isBouncing, setIsBouncing] = useState(false);
    const html = document.documentElement;

    const applyTheme = (themeType) => {
        switch(themeType){
            case 'light':
                setIcon(faSun);
                break;
            case 'dark':
                setIcon(faMoon);
                break;
            case 'auto':
                setIcon(faCircleHalfStroke);
                break;
            default:
                setIcon(faCircleHalfStroke);
                break;
        }
        setTheme(themeType);
        localStorage.setItem('theme', themeType);
        html.setAttribute('data-theme', themeType);
    }

    const changeTheme = () => {
        switch(theme){
            case 'light':
                applyTheme('dark');
                break;
            case 'dark':
                applyTheme('auto');
                break;
            case 'auto':
                applyTheme('light');
                break;
            default:
                applyTheme('auto');
                break;
        }
    }
    
    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if(theme)
            applyTheme(theme);
        else
            applyTheme('auto');
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return(
        <button 
        style={{position:"absolute", top:'0.8rem', right:'0.8rem'}}
        onMouseOver={() => setIsBouncing(true)}
        onMouseOut={() => setIsBouncing(false)}
        onFocus={() => setIsBouncing(true)}
        onBlur={() => setIsBouncing(false)}
        onClick={changeTheme}
        >
            <FontAwesomeIcon icon={icon} bounce={isBouncing}/>
        </button>
    )
}