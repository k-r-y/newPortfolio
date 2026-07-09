




export default function ContactDetailsCard({ Title, Data }){
  return (


   
    <div className="flex justify-start gap-2 items-center">
      <h3 className="font-semibold text-sm font-poppins text-neutral-800 dark:text-neutral-400">{Title}:</h3>
      <p className="text-xs text-light text-neutral-600 dark:text-neutral-500">{Data}</p>
    </div>
  );
};