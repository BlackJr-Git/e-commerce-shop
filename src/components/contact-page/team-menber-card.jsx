function TeamMemberCard() {
  return (
    <div className="bg-slate-50 w-60 p-6 rounded-2xl drop-shadow-lg">
      <div className="rounded-full py-6 flex items-center justify-center">
        <img className="rounded-full w-40" src="https://i.imgur.com/wfxoqxh.jpg" alt="" />
      </div>
      <h6 className="text-center text-2xl font-semibold">Junior Asosa</h6>
      <p className="text-center text-xl font-medium">Founder - CEO </p>
    </div>
  );
}

export default TeamMemberCard;
