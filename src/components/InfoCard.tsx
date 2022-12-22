interface ICardInfo {
  title: string;
  content: string | React.ReactNode;
}
const InfoCard = ({ title, content }: ICardInfo) => {
  return (
    <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-slate-700/10 p-4 ">
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="text-lg">{content}</div>
    </div>
  );
};
export default InfoCard;
