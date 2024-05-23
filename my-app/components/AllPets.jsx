import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllPets = (props) => {
    const [allPets, setAllPets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/pet')
            .then(response => {
                setAllPets(response.data.results);
            })
            .catch(err => {
                console.log("errrr", err);
            });
    }, [props.newPet]);

    let allPetsSorted = allPets.sort((a, b) => (a.petType > b.petType) ? 1 : ((b.petType > a.petType) ? -1 : 0));

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-4">Pet Shelter</h1>
            <p><Link to="/new" className="text-blue-500">Add a pet to the shelter</Link></p>
            <p className="mb-4">These pets are looking for a good home!</p>
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead>
                    <tr>
                        <th className="py-2 px-4 bg-gray-200">Name</th>
                        <th className="py-2 px-4 bg-gray-200">Type</th>
                        <th className="py-2 px-4 bg-gray-200">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allPetsSorted.map((petObj) => (
                        <tr key={petObj._id} className="hover:bg-gray-100">
                            <td className="py-2 px-4 border-b">{petObj.petName}</td>
                            <td className="py-2 px-4 border-b">{petObj.petType}</td>
                            <td className="py-2 px-4 border-b">
                                <Link to={`/${petObj._id}`} className="text-blue-500 mr-2">Details</Link> |
                                <Link to={`/edit/${petObj._id}`} className="text-blue-500 ml-2">Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllPets;
