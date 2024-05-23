import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from 'react-router-dom';
import axios from 'axios';

const OnePet = () => {
    const { id } = useParams();
    const [petInfo, setPetInfo] = useState({});
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:3000/api/pet/${id}`)
            .then(response => {
                setPetInfo(response.data.results);
            })
            .catch(err => {
                console.log("errrr", err);
            });
    }, [id]);

    const deletePet = () => {
        axios.delete(`http://localhost:3000/api/pet/delete/${id}`)
            .then(response => {
                history.push("/");
            })
            .catch(err => console.log("something went wrong", err));
    }

    return (
        <div className="container mx-auto py-8">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-4xl font-bold">Pet Shelter</h1>
                <p><Link to={'/'} className="text-blue-500">Go Back</Link></p>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Details about: {petInfo.petName}</h3>
            <p className="mb-2">Pet Type: {petInfo.petType}</p>
            <p className="mb-2">Description: {petInfo.petDescription}</p>
            {petInfo.skillOne && (
                <p className="mb-4">Skills: {petInfo.skillOne}, {petInfo.skillTwo}, {petInfo.skillThree}</p>
            )}
            <button onClick={deletePet} className="bg-red-500 text-white py-2 px-4 rounded">Adopt {petInfo.petName}</button>
        </div>
    );
}

export default OnePet;
