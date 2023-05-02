import connectDb from "@/mongo/mongoose";
import ContactSchema from "@/models/user";

const handler = async (req, res) => {
  if (req.method === "PUT") {
    const { id, fname } = req.body;

    try {
      const contact = await ContactSchema.findOneAndUpdate(
        { _id: id },
        { fname: fname },
        { new: true }
      );

      if (!contact) {
        return res.status(404).json({ message: "Contact not found" });
      }

      return res.status(200).json({ message: "Contact updated successfully", contact });
    } catch (error) {
      return res.status(500).json({ message: "Unable to update contact" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
};

export default connectDb(handler);
