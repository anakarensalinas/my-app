import React from "react";

const Photo = props => <div><img src={props.photo.url} alt={props.photo.title} /></div>;

export default Photo;