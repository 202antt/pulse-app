"use client";

import { closeCommentModal } from '@/redux/slices/modalSlice';
import { Modal } from '@mui/material';
import { AppDispatch, RootState } from '@/redux/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostInput from '../PostInput';
import { PostHeader } from '../Post';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function CommentModal() {
    const open = useSelector((state: RootState) => state.modals.commentModalOpen);
    const commentDetails = useSelector(
        (state: RootState) => state.modals.commentPostDetails
    );
    const dispatch: AppDispatch = useDispatch();

    return (
        <>
            <Modal
                open={open}
                onClose={() => dispatch(closeCommentModal())}
                className="flex justify-center items-center"
            >
                <div className="w-full max-w-md mx-6 h-full sm:w-[600px] sm:h-fit bg-white sm:rounded-xl outline-none shadow-lg relative">
                    <XMarkIcon
                        className="w-7 mt-5 ms-5 cursor-pointer"
                        onClick={() => dispatch(closeCommentModal())}
                    />

                    <div className="pt-5 pb-10 px-0 sm:px-5 flex flex-col">
                        <PostHeader
                            name={commentDetails.name}
                            username={commentDetails.username}
                            text={commentDetails.text}
                            replyTo={commentDetails.username}
                        />

                        <div className="mt-4">
                            <PostInput insideModal={true} />
                        </div>

                        <div className="absolute w-0.5 h-32 bg-gray-300 left-[33px] sm:left-[53px] top-20 z-0"></div>
                    </div>
                </div>
            </Modal>
        </>
    );
}