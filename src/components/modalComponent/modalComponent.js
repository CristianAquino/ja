import MessageFacade from "../../facades/messageFacade";

export default function ModalComponent() {
  const messageFacade = new MessageFacade();
  return (
    <div>
      <button onClick={() => messageFacade.openModalAssignmentSchedule()}>
        modal1
      </button>
      <button>modal2</button>
      <button>modal3</button>
    </div>
  );
}
