import React from 'react'
import Button from '../atoms/Button'
import { Icon } from '@iconify/react'

function Quote() {
    return (
        <div className='w-full max-w-2xl mx-auto'>
            <div className='bg-gray-50 shadow text-center font-medium text-lg text-main p-5 leading-9 rounded-xl'>
                اللّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. ( 1 مرة )
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-3'>
                <Button className='flex items-center justify-center gap-2 px-16 font-semibold'>
                    <Icon icon={"solar:heart-angle-bold"} /> <span>حفظ</span>
                </Button>
                <Button type='outline' className='flex items-center justify-center gap-2 px-16 font-semibold'>
                    <Icon icon={"solar:paperclip-2-outline"} /> <span>نسخ</span>
                </Button>
                <button className='flex items-center justify-center gap-2 w-full px-16 font-semibold text-main'>
                    <Icon icon={"solar:multiple-forward-right-outline"} /> <span>نسخ</span>
                </button>
            </div>
        </div>
    )
}

export default Quote
