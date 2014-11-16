dd if=/dev/zero of=/swapfile1 bs=1M count=2000
wait 10s
swapon -a
