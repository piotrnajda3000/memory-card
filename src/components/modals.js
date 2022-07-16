import { mdiCloseBox, mdiRestart } from "@mdi/js";
import SIcon from "../styles/components/SIcon";

export const helpModal = (
  <>
    <span>
      To win, click all the cards, without clicking the same one twice.
    </span>
    <SIcon path={mdiCloseBox} $dark />
  </>
);

export function WinModal({ onIconClick }) {
  return (
    <>
      <span>Well done! Continue?</span>
      <div className="choice">
        <SIcon path={mdiRestart} $dark size="45px" onClick={onIconClick} />
      </div>
    </>
  );
}
