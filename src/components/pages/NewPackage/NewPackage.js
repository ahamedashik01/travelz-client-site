import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import "./NewPackage.css"

const NewPackage = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/packages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Package Added Successfully');
                    reset();
                }
            })
    }
    return (
        <div className="quality">
            <div className="package-adder my-5">
                <h3 className="my-4">Create & Plan Your Own Tour Package<span class="badge bg-dark rounded-pill ms-2">New</span></h3>
                <hr />
                <form className="py-5" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Your Tour Title" type="text" {...register("tourTittle", { required: true })} />
                    <input placeholder="Image Url" type="text" {...register("thumNail", { required: true })} />
                    <textarea placeholder="Description"  {...register("des", { required: true })} />
                    <input placeholder="Tour Cost" type="number" {...register("tourCost", { required: true })} />
                    <input placeholder="Tour Length in Days" type="number" {...register("tourLength", { required: true })} />
                    <input placeholder="Number Of Meal " type="number" {...register("noOFMeal", { required: true })} />
                    <input placeholder="Number Of Activities " type="number" {...register("noOFAct", { required: true })} />
                    <input placeholder="Minimun size of the group " type="number" {...register("avgGrpSize_min", { required: true })} />
                    <input placeholder="Maximun size of the group " type="number" {...register("avgGrpSize_max", { required: true })} />
                    <textarea placeholder="What Your Package Incules"  {...register("pakageInc", { required: true })} />
                    <input className="btn-dark" type="submit" value="CREATE PACKAGE" />
                </form>
            </div>

        </div>
    );
};

export default NewPackage;