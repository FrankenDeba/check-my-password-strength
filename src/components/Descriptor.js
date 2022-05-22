import "./Descriptor.style.css";

export default function Descriptor() {
  return (
    <>
      <h2>Check your password strength quickly!</h2>
      <div className="scale__descriptions">
        <p>{`0 - 100 ==> Poor`}</p>
        <p>{`100 - 200 ==> Moderate`}</p>
        <p>{`200+ ==> Strong`}</p>
      </div>
    </>
  );
}
