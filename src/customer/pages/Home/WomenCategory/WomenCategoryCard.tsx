
const WomenCategoryCard = ({item}:any) => {
  return (
    <div className="flex w-20 flex-col items-center gap-3 cursor-pointer">
      <img className="object-contain h-10" src={item?.image} alt="women category image" />
      <h2 className="font-semibold text-sm">{item?.name}</h2>
    </div>
  )
}

export default WomenCategoryCard
