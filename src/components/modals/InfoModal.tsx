import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the SMITE related word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="S"
          status="correct"
        />
        <Cell value="M" />
        <Cell value="I" />
        <Cell value="T" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter S is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="N" />
        <Cell value="E" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="I"
          status="present"
        />
        <Cell value="T" />
        <Cell value="H" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter I is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="T" />
        <Cell value="I" />
        <Cell value="T" />
        <Cell isRevealing={true} isCompleted={true} value="A" status="absent" />
        <Cell value="N" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter A is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Created by <b>Canas</b> © 2022<br/><br/>
        This is forked from an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          github
        </a>{' '}
      </p>
    </BaseModal>
  )
}
