




export default function ContactDetailsCard({ Title, Data }){
  return (


   
    <div className="flex justify-start gap-2 items-center">
      <h2 className="font-semibold text-sm font-poppins">{Title}:</h2>
      <p className="text-xs text-light text-neutral-600">{Data}</p>
    </div>
  );
};