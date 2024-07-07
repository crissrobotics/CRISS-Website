import "./sponsorcard.scss";

export default function SponsorCard({ sponsorImg }){
  return (
    <div className="card">
      <img src={sponsorImg} />
    </div>
  );
};
