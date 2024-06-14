'use client';

import { Zap } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useProModal } from '@/hooks/use-sub-modal';
// import { useRouter } from 'next/navigation';

export const ProModal = () => {
  const proModal = useProModal();
  // const router = useRouter()


  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='flex justify-center items-center flex-col gap-y-4 pb-2'>
            <div className='flex items-center gap-x-2 font-bold text-xl'>
              Support me
              <Badge variant='premium' className='uppercase text-sm py-1'>
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription>
            <p>
              Do you like my job? Support me by becoming a pro member and get
              early information about my work or just what is new.
            </p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
          // onClick={() => router.push('buymecoffe')}
            size='lg'
            variant='premium'
            className='w-full'
          >
            Upgrade
            <Zap className='w-4 h-4 ml-2 fill-white' />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
