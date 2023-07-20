export default function SidebarForm() {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
      <label htmlFor="email">Email</label>
      <input type="text" id="email" />
      <label htmlFor="msg">Messagge</label>
      <textarea name="msg" id="" cols="30" rows="10"></textarea>
      <button type="submit">
        <span></span>SUBMIT
      </button>
    </form>
  );
}
