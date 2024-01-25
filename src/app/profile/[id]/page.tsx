export default function UserProfile({params}: any) {
    return (
        <div className=" flex flex-col items-center justify-center min-h-screen py2">
            <h1>Pofile</h1>
            <hr />
            <p className="text-4xl">Profile page 
            <span className=" text-orange-700">{params.id }</span>
            </p>
        </div>
    )
}