


export function About(props: { name: string; company: string; IsCeo: boolean }) {
  return (
    <div>
      <h1 className="text-2xl bg-amber-900 w-100 p-2.5 m-5 text-amber-50 rounded-md">Welcome to {props.name}</h1>
        <p className="text-lg m-5 bg-amber-100 p-2 rounded-md w-100">This is the about page of {props.company}</p>
        <h2 className="text-lg m-5 bg-gray-500 w-100 p-2 rounded-xl">Owner {props.IsCeo ? 'yes' : 'no'}</h2>
    </div>
  );
}
