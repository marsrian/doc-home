import Image from "next/image";
import Link from "next/link";
import notFoundImage from "@/assets/NotFoundImage.png"


const NotFoundPage = () => {
	return (
		<div className="flex flex-col items-center justify-center h-[100vh]">
			<h1 className="text-[#0A0808] text-[58px] font-bold">Sorry<span className="text-[40px]">,</span></h1>
			<p className="text-[#6C6B6B] text-xl md:text-[40px]">This page is not found.</p>
			<Image src={notFoundImage} className="my-6 px-4 md:px-0" alt="404 page" />
			<Link href="/" className="text-white text-xl font-bold bg-[#F7A582] hover:bg-orange-400 py-[18px] px-[90px] rounded-[10px]">Back to home</Link>
		</div>
	);
};

export default NotFoundPage;