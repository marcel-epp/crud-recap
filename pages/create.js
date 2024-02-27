import Link from "next/link";
import Form from "@/components/Form";

export default function CreateForm({ handleAddPlace }) {
  return (
    <>
      <Link href="/">Back to Homepage</Link>
      <Form handleAddPlace={handleAddPlace} />
    </>
  );
}
