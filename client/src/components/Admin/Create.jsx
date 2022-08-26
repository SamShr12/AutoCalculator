import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {v4 as uuidv4} from 'uuid'
import axios from "../../api/axios";
import swal from 'sweetalert'
import Nav from "../Header/Nav";

const Create = () => {
    const [itemname, setItemName] = useState("");
    const [priceperbox, setPricePerBox] = useState("");
    const [priceperpacket, setPricePerPacket] = useState("");
    const [priceperdozen, setPricePerDozen] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = uuidv4();
        const newItems = {
            id,
            name:itemname,
            price_per_box:priceperbox,
            price_per_piece:priceperpacket,
            price_per_dozen:priceperdozen,
        };
        try {
            const reponse = await axios.post("/api/products/", newItems)
            console.log(reponse.data);
            navigate('/useradmin')
            swal({
                title:`${itemname} has been created`,
                icon:"success",
                button:"Close"
            })  
        } catch (err) {
            swal(`Error:${err.message}`)

        }
     

    }

    return(
        <div className="m-login">
            <div>
                <Nav />
            </div>
            <main className="sm:container sm:mx-auto sm:max-w-lg sm:mt-10 mb-5">
                <div className="flex">
                    <div className="w-full">
                        <section className="flex flex-col break-words bg-white sm:border-1 sm:rounded-md sm:shadow-sm sm:shadow-lg">
                            <header className="font-semibold bg-gray-200 text-gray-700 py-5 px-6 sm:py-6 sm:px-8 sm:rounded-t-md">
                                Create Items
                            </header>
                            <form className="w-full px-6 space-y-6 sm:px-10 sm:space-y-8" onSubmit={handleSubmit}>
                                <div className="flex flex-wrap">
                                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2 sm:mb-4">
                                        Item Name
                                    </label>

                                    <input type="text" className="form-input w-full border-red-500" required autoComplete="off"
                                    onChange={(e)=>setItemName(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-wrap">
                                    <label htmlFor="text" className="block text-gray-700 text-sm font-bold mb-2 sm:mb-4">
                                        Price for a Box:
                                    </label>
                                    <input type="text" className="form-input w-full border-red-500" required 
                                    onChange={(e)=>setPricePerBox(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-wrap">
                                    <label htmlFor="text" className="block text-gray-700 text-sm font-bold mb-2 sm:mb-4">
                                        Price for a Packet:
                                    </label>
                                    <input type="text" className="form-input w-full border-red-500" required 
                                    onChange={(e)=>setPricePerPacket(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-wrap">
                                    <label htmlFor="text" className="block text-gray-700 text-sm font-bold mb-2 sm:mb-4">
                                        Price for a per dozen:
                                    </label>
                                    <input type="text" className="form-input w-full border-red-500" required 
                                    onChange={(e)=>setPricePerDozen(e.target.value)}
                                    />
                                </div>
                              
                                
                                <div className="flex flex-wrap">
                                    <button type="submit" className="w-full select-none font-bold whitespace-no-wrap p-3 rounded-lg text-base leading-normal no-underline text-gray-100 bg-blue-500 hover:bg-blue-700 sm:py-4">Create</button>
                                   
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Create