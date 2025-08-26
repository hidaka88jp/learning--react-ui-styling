export default function NotFound() {
  return (
    <section className='px-4 sm:px-8'>
      <div className='mx-auto w-full max-w-94 sm:max-w-5xl'>
        <div className='flex flex-col items-center justify-center my-6'>
          <h1 className='font-inconsolata mb-2 text-4xl font-bold'>404 - Not Found</h1>
          <div className='bg-accent my-6 h-1 w-8' />
          <p>Sorry, the page you’re looking for doesn’t exist.</p>
        </div>
      </div>
    </section>
  );
}
