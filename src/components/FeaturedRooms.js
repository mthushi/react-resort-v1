import React, { Component } from 'react';
import {RoomContext} from '../context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        const {loading,featuredRooms : rooms} = this.context; //changing name of featuredRooms as rooms 
        const frooms = rooms.map(room => {
            return <Room key={room.id} room={room}/>
        })
        return (
            <section className="featured-rooms">
                <Title title="featured rooms"/>
                <div className="featured-rooms-center">
                    {loading? <Loading/> :frooms}
                </div>
            </section>  
        )
    }
}
