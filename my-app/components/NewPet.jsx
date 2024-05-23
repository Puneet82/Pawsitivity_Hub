import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

const NewPet = (props) => {
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDescription, setPetDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const addPet = (e) => {
        e.preventDefault();
        const formInfo = { petName, petType, petDescription, skillOne, skillTwo, skillThree };

        axios.post("http://localhost:3000/api/pet/new", formInfo)
            .then(response => {
                if (response.data.error) {
                    setErrors(response.data.error.errors);
                } else {
                    props.setNewPet(!props.newPet);
                    history.push("/");
                }
            })
            .catch(err => console.log("errrrrr", err));
    }

    return (
        <div className="container mx-auto py-8">
            <p><Link to={'/'} className="text-blue-500">Go Back</Link></p>
            <form onSubmit={addPet} className="bg-white shadow-md rounded-lg p-6">
                <div className="mb-4">
                    <label htmlFor="petName" className="block text-gray-700">Pet Name: </label>
                    <input type="text" name="petName" className="w-full mt-2 p-2 border rounded" onChange={(e) => setPetName(e.target.value)} value={petName} />
                    <p className="text-red-500">{errors.petName?.message}</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="petType" className="block text-gray-700">Pet Type: </label>
                    <input type="text" name="petType" className="w-full mt-2 p-2 border rounded" onChange={(e) => setPetType(e.target.value)} value={petType} />
                    <p className="text-red-500">{errors.petType?.message}</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="petDescription" className="block text-gray-700">Pet Description: </label>
                    <input type="text" name="petDescription" className="w-full mt-2 p-2 border rounded" onChange={(e) => setPetDescription(e.target.value)} value={petDescription} />
                    <p className="text-red-500">{errors.petDescription?.message}</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="skillOne" className="block text-gray-700">Skill One: </label>
                    <input type="text" name="skillOne" className="w-full mt-2 p-2 border rounded" onChange={(e) => setSkillOne(e.target.value)} value={skillOne} />
                    <p className="text-red-500">{errors.skillOne?.message}</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="skillTwo" className="block text-gray-700">Skill Two: </label>
                    <input type="text" name="skillTwo" className="w-full mt-2 p-2 border rounded" onChange={(e) => setSkillTwo(e.target.value)} value={skillTwo} />
                    <p className="text-red-500">{errors.skillTwo?.message}</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="skillThree" className="block text-gray-700">Skill Three: </label>
                    <input type="text" name="skillThree" className="w-full mt-2 p-2 border rounded" onChange={(e) => setSkillThree(e.target.value)} value={skillThree} />
                    <p className="text-red-500">{errors.skillThree?.message}</p>
                </div>
                <input type="submit" value="Add Pet" className="bg-blue-500 text-white py-2 px-4 rounded" />
            </form>
        </div>
    );
}

export default NewPet;
