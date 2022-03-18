import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
  DialogOverlay,
} from "solid-headless";
import { createSignal } from "solid-js";

export default function ImageModal(props) {
  const [isOpen, setIsOpen] = createSignal(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <button type="button" onClick={openModal} aria-label="open image">
        <img
          loading="lazy"
          src={props.imageMin}
          class="h-32 md:h-44 w-auto rounded-md hover:translate-y-1 duration-200 cursor-pointer"
          alt={props.description ? props.description : ""}
          width={props.width}
          height={props.height}
        />
      </button>
      <Transition appear show={isOpen()}>
        <Dialog
          isOpen
          class="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div class="min-h-screen px-2 md:px-4 flex items-center justify-center">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <DialogOverlay class="fixed inset-0 bg-black bg-opacity-80" />
            </TransitionChild>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span class="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel class="inline-block w-full max-w-md md:p-6 my-8 text-left align-middle transition-all transform">
                <div class="mb-4">
                  <button
                    type="button"
                    class="inline-flex justify-center p-2 text-sm font-medium bg-white rounded-full hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div class="relative flex items-center justify-center">
                    <div class="z-1 rounded-md bg-neutral-900 bg-opacity-25 flex items-center justify-center flex-1 h-full top-O bottom-O right-0 left-0 absolute">
                        <svg class="animate-spin h-12 w-12" version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
                            <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                            </path>
                        </svg>
                    </div>
                    <img
                    loading="lazy"
                    src={props.image}
                    class="rounded-md relative z-2"
                    alt={props.description ? props.description : ""}
                    width={props.width}
                    height={props.height}
                    />
                </div>
                {props.description && props.date && (
                  <div class="flex gap-2 items-center pt-2">
                    <span class="rounded-full px-2 py-1 font-bold bg-white">
                      <span class="bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 text-transparent">
                        {props.date}
                      </span>
                    </span>
                    <span class="text-white">{props.description}</span>
                  </div>
                )}
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
