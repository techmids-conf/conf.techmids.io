import {EVENT, AVAILABLE_INFORMATION} from "../../event";

export function VenueInfo() {
    return (
      <>
        {AVAILABLE_INFORMATION.locationAvailable  && (
          <dl className="grid grid-cols-2 gap-y-6 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
          {[
            ['Spaces', `Limited to ${EVENT.capacity} seats`],
            ['Venue', EVENT.venue],
            ['Location', EVENT.address],
          ].map(([name, value]) => (
            <div key={name}>
              <dt className="font-mono text-sm text-brand-500">{name}</dt>
              <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-brand-700">
                {value}
              </dd>
            </div>
          ))}
        </dl>
        )}
      </>
    )
}