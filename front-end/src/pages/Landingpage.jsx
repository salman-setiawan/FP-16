import React from 'react'
import AnswerCard from '../components/AnswerCard'
import LandingButton from '../components/LandingButton'
import MobileAvatar from '../components/MobileAvatar'
import MobileButton from '../components/MobileButton'

const Landingpage = () => {
    return (
        <div>
            <div className="pt-24 pb-6 px-4">
                <div className="text-2xl font-bold pb-12">Perawatan yang tepat di waktu yang tepat.</div>
            </div>
            <img className="w-full" src="homepict.svg" alt="" />
            <div className="py-24 px-4">
                <div className="text-center pb-12">scroll untuk melihat lebih lanjut.</div>
                <div className="pt-16">
                    <div className="font-bold mb-2">Siapa Kami?</div>
                    <div className="text-gray-500 text-sm leading-relaxed">MS Wellbeing Center adalah sebuah klinik layanan psikologi. Berfokus pada kesehatan mental dewasa, remaja & anak melalui berbagai layanan konseling dan terapi. MS Wellbeing Center juga mempunyai layanan tumbuh kembang psikologi anak dan anak-anak dengan kebutuhan khusus.</div>
                </div>
                <div className="pt-12">
                    <div className="font-bold mb-3">Layanan yang kami tawarkan?</div>
                    <div className="flex flex-col gap-y-4">
                        <div className="flex justify-between">
                            <LandingButton pic="konseling.svg" />
                            <LandingButton pic="konseling.svg" />
                            <LandingButton pic="konseling.svg" />
                            <LandingButton pic="konseling.svg" />
                        </div>
                        <AnswerCard 
                            title="Webinar" 
                            desc="anda dapat mengikuti kegiatan webinar bertemakan kesehatan mental yang disediakan oleh kami, kami juga mendatangkan langsung narasumber dari ahli yang terpercaya, dan anda bisa mendapatkan beberapa benefit menarik dari kami selama mengikuti kegiatan webinar."
                        />
                    </div>
                </div>
                <div className="pt-12">
                    <div className="font-bold mb-3">Kenapa kami?</div>
                    <div className="flex flex-col gap-y-4">
                        <div className="flex justify-between">
                            <LandingButton pic="konseling.svg" />
                            <LandingButton pic="konseling.svg" />
                            <LandingButton pic="konseling.svg" />
                            <LandingButton pic="konseling.svg" />
                        </div>
                        <AnswerCard 
                            title="Webinar" 
                            desc="anda dapat mengikuti kegiatan webinar bertemakan kesehatan mental yang disediakan oleh kami, kami juga mendatangkan langsung narasumber dari ahli yang terpercaya, dan anda bisa mendapatkan beberapa benefit menarik dari kami selama mengikuti kegiatan webinar."
                        />
                    </div>
                </div>
                <div className="pt-12">
                    <div className="font-bold mb-3">Sedikit testimoni dari user kami</div>
                    <div className="flex flex-col gap-y-4">
                        <div className="flex justify-between">
                            <LandingButton pic="konseling.svg" />
                            <LandingButton pic="konseling.svg" />
                            <LandingButton pic="konseling.svg" />
                            <LandingButton pic="konseling.svg" />
                        </div>
                        <AnswerCard 
                            title="Webinar" 
                            desc="anda dapat mengikuti kegiatan webinar bertemakan kesehatan mental yang disediakan oleh kami, kami juga mendatangkan langsung narasumber dari ahli yang terpercaya, dan anda bisa mendapatkan beberapa benefit menarik dari kami selama mengikuti kegiatan webinar."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landingpage
