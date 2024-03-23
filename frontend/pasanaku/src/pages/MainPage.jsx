import { useForm } from "react-hook-form";
import {
  userRequest,
  pasanakuId,
  getNumberPlayer,
  updatePlayersPasanaku,
  updatePositionPlayer,
} from "../api/auth";
import { useState } from "react";

function MainPage() {
  const { register, handleSubmit } = useForm();
  const [user, setUser] = useState(0);

  const onSubmit = handleSubmit(async (values) => {
    const res = await userRequest(values);
    const pY = await pasanakuId();
    const number = await getNumberPlayer(pY.data.data[0]._id);
    await updatePlayersPasanaku(pY.data.data[0]._id);
    const positionAdded = await updatePositionPlayer(res.data.data._id, number.data.data);
    setUser(positionAdded.data.data);
  })

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md mx-auto mt-5">
      <h2 className="w-full font-semibold text-xl text-center mb-5">SORTEO - PASANAKU</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("name", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Nombre Ap.Paterno"
        />
        <input
          type="text"
          {...register("year", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          value={2024}
          readOnly
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-2"
        >
          Sortear numero
        </button>
      </form>
      <p className="w-full pt-5 text-2xl font-semibold text-center">{
        user["position"] != undefined ? `Numero sorteado: ${user["position"]}` : ""
      }</p>
    </div>
  );
}

export default MainPage;
