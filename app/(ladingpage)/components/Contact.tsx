import { Facebook, Instagram, X } from "lucide-react";

type CustomContactCardProps = {

}

export const ContactCard = ({ }: CustomContactCardProps) => {
    return (
        <div className="bg-[#290742] text-white pt-10 pb-10 flex justify-center">
            <div className="w-[70%] flex justify-between">
                <div>
                    <h1 className="text-[#9E6DC2] text-2xl mb-2">Novidades</h1>
                    <input
                        type="text"
                        placeholder="E-mail"
                        className="pl-3 pr-8 py-2 rounded-sm bg-[#170027]"
                    />
                    <button className="right-1 top-1 bg-[#9e6dc2] p-2 px-4  rounded-e-sm">
                        enviar
                    </button>
                </div>
                <div className="">
                    <p className="flex mb-2">

                        <Instagram className="me-1 text-[#9E6DC2]" />
                        theblog_insta
                    </p>
                    <p className="flex mb-2">
                        <Facebook className="me-1 text-[#9E6DC2]" />
                        theblog_face
                    </p>
                    <p className="flex">
                        <X className="me-1 text-[#9E6DC2]" />
                        theblog_x
                    </p>
                </div>
            </div>
        </div>
    );
};
