import { useStore } from "@/appStore";

function UserAvatar() {
  const { currentUser } = useStore();
  return (
    <div className="w-10">
      <img src={currentUser.avatar} alt="" />
    </div>
  );
}

export default UserAvatar;
