import Logo from '@/components/ui/Logo';

const AuthPage = ({
  authForm: AuthForm,
  authCtrl: AuthCtrl,
  imgSmall,
  imgMedium,
  imgLarge,
  imgDefault,
}) => {
  return (
    <>
      <div className="image-wrapper bg-bgDark hidden items-center justify-center gap-18 pt-15 text-3xl md:flex xl:flex-col xl:justify-normal xl:gap-7.5 xl:pt-37.5 xl:pb-19">
        <img
          className="relative z-30 w-68.5 object-cover xl:w-113"
          srcSet={`${imgSmall} 274w, ${imgMedium} 548w, ${imgLarge} 905w`}
          sizes="(min-width: 1280px) 548px, 274px "
          src={imgDefault}
          alt="Finance App"
        />
        <p className="relative z-30 text-3xl">Finance App</p>
      </div>
      <div className="content-wrapper xl:bg-bgLight md:bg-bgDark flex items-center justify-center py-12.5">
        <div className="relative z-30 flex w-full flex-col items-center justify-center bg-white p-5 md:w-135 md:rounded-[20px] md:px-16 md:pt-10 md:pb-15">
          <div className="flex items-center gap-x-4">
            <Logo className="h-auto w-8 md:w-10" />
            <h1 className="text-2xl font-bold md:text-3xl">Wallet</h1>
          </div>
          {AuthForm}
          {AuthCtrl}
        </div>
      </div>
      <div className="md:bg-ellipse-pink xl:bg-ellipse-pink-desktop pointer-events-none absolute inset-0 z-20 bg-none bg-top-right bg-no-repeat md:bg-size-[48%_auto] lg:bg-size-[45%_auto] xl:blur-md"></div>
      <div className="md:bg-ellipse-violet pointer-events-none absolute inset-0 z-10 bg-none bg-bottom-left bg-no-repeat md:bg-size-[63%_auto] lg:bg-size-[58%_auto] xl:bg-size-[38%_auto]"></div>
    </>
  );
};

export default AuthPage;
