
import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'

class Directory extends Component {

    constructor() {
        super();

        this.state = {
            sections: [
                {
                    id: '01',
                    title: "HEATS",
                    subtitle: "SHOP NOW"
                },
                {
                    id: '02',
                    title: "JACKETS",
                    subtitle: "SHOP NOW"
                },
                {
                    id: '03',
                    title: "SNEAKERS",
                    subtitle: "SHOP NOW"
                },
                {
                    id: '04',
                    title: "WOMENS",
                    subtitle: "SHOP NOW"
                },
                {
                    id: '05',
                    title: "MENS",
                    subtitle: "SHOP NOW"
                },
            ]
        }

    };


    render() {
        const { sections } = this.state;
        return (
            <div className='directory-menu'>
                {
                    sections.map(item => (
                        <MenuItem key={item.id} title={item.title} subtitle={item.subtitle} />
                    ))
                }
            </div>
        );
    }

}


export default Directory;